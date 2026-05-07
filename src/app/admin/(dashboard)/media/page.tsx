"use client";

import { useState, useEffect, useRef } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Upload, Trash2, Loader2, Copy, Image as ImageIcon } from "lucide-react";
import toast from "react-hot-toast";

interface Media {
  id: string;
  filename: string;
  url: string;
  altText: string;
  size: number;
  mimeType: string;
  createdAt: string;
}

export default function MediaAdminPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    try {
      const res = await fetch("/api/media");
      const data = await res.json();
      if (data.success) setMedia(data.data);
    } catch { toast.error("Failed to load media"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setUploading(true);
    try {
      let allOk = true;
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/media", { method: "POST", body: formData });
        const data = await res.json();
        if (!data.success) { toast.error(`Failed to upload ${file.name}`); allOk = false; }
      }
      if (allOk) toast.success("Upload complete!");
      load();
    } catch { toast.error("Upload failed"); }
    finally { setUploading(false); if (fileRef.current) fileRef.current.value = ""; }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this file?")) return;
    await fetch(`/api/media/${id}`, { method: "DELETE" });
    toast.success("Deleted"); load();
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied!");
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Media Library" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-xl font-bold text-gray-800">Media Library</h2><p className="text-sm text-gray-500">{media.length} files</p></div>
          <label className={`flex items-center gap-2 px-4 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold cursor-pointer hover:bg-[#071A3D] transition-all ${uploading ? "opacity-70 pointer-events-none" : ""}`}>
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
            {uploading ? "Uploading..." : "Upload Files"}
            <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleUpload} />
          </label>
        </div>

        {/* Drop hint */}
        <div
          className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center mb-6 cursor-pointer hover:border-[#25468F] hover:bg-blue-50/30 transition-all"
          onClick={() => fileRef.current?.click()}
        >
          <Upload size={32} className="mx-auto text-gray-300 mb-2" />
          <p className="text-sm text-gray-500">Click to upload or drag & drop</p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP, SVG, PDF up to 5MB</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {media.map(m => (
              <div key={m.id} className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                  {m.mimeType.startsWith("image/") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.url} alt={m.altText || m.filename} className="w-full h-full object-cover" />
                  ) : (
                    <ImageIcon size={32} className="text-gray-300" />
                  )}
                </div>
                <div className="p-2">
                  <p className="text-xs font-medium text-gray-700 truncate">{m.filename}</p>
                  <p className="text-xs text-gray-400">{formatSize(m.size)}</p>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button onClick={() => copyUrl(m.url)} className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors" title="Copy URL">
                    <Copy size={14} className="text-gray-700" />
                  </button>
                  <button onClick={() => handleDelete(m.id)} className="p-2 bg-white rounded-lg hover:bg-red-50 transition-colors" title="Delete">
                    <Trash2 size={14} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
            {media.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-400 text-sm">No files uploaded yet</div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
