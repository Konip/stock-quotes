import { useDispatch } from 'react-redux'
import BigChart from '../BigChart/BigChart'
import "./BigCard.css"
import TimeFramesBig from './../TimeFrames/TimeFramesBig';
import { addActive } from '../../store/stock-reducer';

export default function BigCard({ type, request, activeRow, activeTime, data, colorTheme }) {
    // console.log(data)
    const dispatch = useDispatch()

        function req(type, time, pair) {
        dispatch(addActive({ type, time, pair }))
        request(type, time, pair, 'big')
    }

    return (
        <div className="big-card">
            <div className="wrapper">

                <div className={colorTheme ? "top-card-light" : "top-card-dark"}>
                    <BigChart data={data} active={activeTime} colorTheme={colorTheme} />
                </div>
                <div className="low-card">
                    <div className="left-block">
                        <div className={colorTheme ? "time-frames-light" : "time-frames-dark"}>
                            <TimeFramesBig active={activeTime} colorTheme={colorTheme}
                                onClickItem={(active) => req(type, active, activeRow)} />
                        </div>
                        <div className={colorTheme ? "text-light" : "text-dark"}>
                            Baidu, Inc — это поставщик услуг по поиску в интернете на китайском языке.
                            Компания предлагает поисковую платформу на китайском языке на своем веб-сайте
                            Baidu.com, который позволяет пользователям находить информацию в сети, включая
                            веб-страницы, новости, изображения, документы и мультимедийные файлы через
                            ссылки, представленные на веб-сайте. Помимо обслуживания частных пользователей
                            интернет-поиска, компания предоставляет платформу для бизнеса и привлечения
                            клиентов. Этот бизнес состоит из трёх сегментов: услуги поиска, службы
                            транзакций и iQiyi. Услуги поиска — это основанные на ключевых словах целевые
                            маркетинговые услуги, направленные на поисковые запросы интернет-пользователей,
                            которые в основном включают в себя услуги по оплате за результат (P4P)
                            и онлайн-маркетинг. Службы транзакций насчитывают: Baidu Nuomi, Baidu
                            Takeout Delivery, Baidu Maps, Baidu Connect, Baidu Wallet и другие.
                            iQiyi — это онлайн видео платформа с библиотекой контента, которая
                            включает лицензированные фильмы, телесериалы, мультфильмы, эстрадные
                            шоу и другие программы.
                    </div>
                    </div>

                    <div className={colorTheme ? "right-block-light" : "right-block-dark"}>
                        <div className={colorTheme ? "news-light" : "news-dark"}>
                            <h1>Здесь могла быть ваша реклама</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
