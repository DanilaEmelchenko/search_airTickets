import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAviTickets } from "./aviTicketsThunks";
import { loadMoreTickets} from "./aviTicketsSlice";
import Button from "../../ui/Button/Button";
import s from "./aviTickets.module.scss";
import { useEffect, useState } from "react";

const AviTickets = () => {
  const dispatch = useAppDispatch();
  const { tickets, error, visiblelimit} = useAppSelector(
    (state) => state.aviTickets
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleLoading, setVisibleLoading] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setVisibleLoading("Все билеты загружены");
      dispatch(fetchAviTickets());
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const clickLoadMore = () => {
    dispatch(loadMoreTickets());
  };

  if (!tickets) {
    return <div>Ничего не найдено</div>;
  }

  if (error) {
    return <div>Ошибка загрузки</div>;
  }
  return (
    <>
      <div className={s.aviTickets__wrapper}>
        {loading && <div>Загрузка...</div>}
        {tickets.slice(0, visiblelimit).map((el) => (
          <div key={el.id} className={s.aviTickets}>
            <div className={s.top}>
              <p className={s.price}>{el.price} Р</p>
              <img src={el.logo} alt="logo" />
            </div>
            <div className={s.bottom}>
              <div className={s.info}>
                <p className={s.route}>SVO - LED</p>
                <p className={s.time}>{el.time}</p>
              </div>
              <div className={s.info}>
                <p className={s.status}>В пути</p>
                <p className={s.duration}>{el.duration}</p>
              </div>
              <div className={s.info}>
                <p className={s.transferTitle}>Пересадки</p>
                <p className={s.transferCount}>{el.transferCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visiblelimit < tickets.length ? (
        <Button onClick={clickLoadMore} className={s.button}>
          Загрузить еще билеты
        </Button>
      ) : (
        <div>{visibleLoading}</div>
      )}
    </>
  );
};

export default AviTickets;
