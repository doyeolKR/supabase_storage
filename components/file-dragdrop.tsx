"use client";

export default function FileDragDrop() {
  return (
    <section className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center">
      <input type="file" className="" />
      <p>파일을 여기다 끌어다 놓거나 클릭하여 업로드하세요.</p>
    </section>
  );
}
