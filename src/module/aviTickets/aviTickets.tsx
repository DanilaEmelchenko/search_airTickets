import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FunctionComponent, useEffect, useState } from "react";

import { fetchAviTickets } from "../../api/aviTicketsThunks";
import { loadMoreTickets } from "../../state/aviTicketsSlice";
import { filterTickets } from "../../utils/filterTickets";

import Button from "../../ui/Button/Button";
import s from "./aviTickets.module.scss";

const AviTickets: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { tickets, error, visiblelimit, filter } = useAppSelector(
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

  const filteredTickets = filterTickets(tickets, filter);

  if (!tickets) return <div>Ничего не найдено</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <>
      <div className={s.aviTickets__wrapper}>
        {loading && <div>Загрузка...</div>}
        {filteredTickets.slice(0, visiblelimit).map((el) => (
          <div key={el.id} className={s.aviTickets}>
            <div className={s.top}>
              <p className={s.price}>{el.price} Р</p>
              <img className={s.logo} src={el.logo} alt={el.company} />
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
      {visiblelimit < filteredTickets.length ? (
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
