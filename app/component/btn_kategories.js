export default function Kategories({categories_name, status  = false}) {
  return (
    <div>
      <button
        className={`text-md px-5 py-0.5 rounded-lg me-5 mt-2 flex-wrap stroke-secondary border
        ${status? 'text-white bg-secondary': 'bg-accent text-secondary'}`}
      >
        {categories_name}
      </button>
    </div>
  );
}
