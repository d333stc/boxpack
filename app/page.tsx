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
      {/* Первый экран */}
      <section className="bg-[#1a2a52] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm">Автоматизированный фулфилмент</p>
            <h1 className="mt-4 text-4xl font-bold lg:text-5xl">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="mt-6 text-sm">
              Автоматизированная упаковка, видеоконтроль каждого заказа и
              отправка в день поступления. Мы берем на себя хранение, сборку,
              маркировку и логистику.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <a href="#" className="text-sm font-bold">
                Рассчитать стоимость →
              </a>
              <button className="rounded-[10px] border border-white px-4 py-2 text-sm">
                Получить консультацию
              </button>
            </div>

            {/* Три карточки с цифрами */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[10px] bg-white/10 p-4">
                <p className="font-bold">5000+</p>
                <p className="mt-1 text-xs">заказов в день</p>
              </div>

              <div className="rounded-[10px] bg-white/10 p-4">
                <p className="font-bold">99.8%</p>
                <p className="mt-1 text-xs">Точность сборки</p>
              </div>

              <div className="rounded-[10px] bg-white/10 p-4">
                <p className="font-bold">FBO/FBS</p>
                <p className="mt-1 text-xs">все маркетплейсы</p>
              </div>
            </div>
          </div>

          {/* Место под видео */}
          <div className="flex h-[240px] items-center justify-center rounded-[10px] bg-[#d3d6e0] text-xs text-black lg:h-[300px]">
            Видео автоматической упаковочной линии
          </div>
        </div>
      </section>
    </>
  );
}