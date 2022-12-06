import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import moment from 'moment';
import { ICard } from './type';

const Card = ({ item }: ICard) => (
  <div className={styles.card}>
    <h1 className={styles.title}>{item.mission_name}</h1>
    <h3>Launch Date: {moment(item.launch_date_utc).format('L')}</h3>
    <Image
      className={styles.logo}
      src={item.links.mission_patch_small}
      layout="responsive"
      height="80"
      width="80"
      objectFit="contain"
      alt='Rocket picture'
    />
    <div className={styles.code}>
      <ul>
        <li>Core Serial: {item.rocket.first_stage.cores[0].core_serial}</li>
        <li>Payload Id: {item.rocket.second_stage.payloads[0].payload_id}</li>
        <li>Payload Type: {item.rocket.second_stage.payloads[0].payload_type}</li>
      </ul>
    </div>
    <p>
      {item.launch_success ? (
        <strong>Launch Succeed!</strong>
      ) : (
        <>
          <strong>Launch Failed</strong> ({item.launch_failure_details.reason})
        </>
      )}
    </p>
  </div>
);

export default Card;
