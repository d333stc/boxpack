export default function HomePage() {
  return (
    <>
      {/* Шапка */}
      <header className="bg-white py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p className="text-2xl font-bold text-[#1a2a52]">BOXPACK</p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services">Услуги</a>
            <a href="#steps">Как это работает</a>
            <a href="#">Видеофиксация</a>
            <a href="#">Калькулятор</a>
            <a href="#">Кейсы</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </header>
    </>
  );
}