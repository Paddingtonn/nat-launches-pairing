import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Card from '../components/card';
import fetchedData from '../services/getData';

export default function Home({ data }) {
  const [rocketsData, setRocketsData] = useState(null);

  useEffect(() => {
    setRocketsData(data);
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.grid}>
          {rocketsData &&
            rocketsData.map((el, index) => {
              if (index < 10) {
                return <Card key={el.flight_number} item={el} />;
              }
            })}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchedData();

  return {
    props: { data: data },
  };
};
