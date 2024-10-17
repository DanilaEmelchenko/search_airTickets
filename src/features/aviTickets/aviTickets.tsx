import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAviTickets } from "./aviTicketsThunks";
import Button from "../../ui/Button/Button";
import s from "./aviTickets.module.scss";
import { useEffect, useState } from "react";

const AviTickets = () => {
  const dispatch = useAppDispatch();
  const { tickets, error } = useAppSelector((state) => state.aviTickets);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      dispatch(fetchAviTickets());
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

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
        {tickets.map((el) => (
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
      <Button className={s.button}>Загрузить еще билеты</Button>
    </>
  );
};

export default AviTickets;
