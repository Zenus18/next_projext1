export default function Kategories({categories_name}) {
  return (
    <div>
        <button className="text-md bg-accent px-5 py-0.5 rounded-lg text-secondary me-5 mt-2 flex-wrap stroke-secondary border border-secondary hover:text-white hover:bg-secondary">
          {categories_name}
        </button>
    </div>
  );
}
