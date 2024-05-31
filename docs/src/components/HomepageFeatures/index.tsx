import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'かんたん',
    description: (
      <>
      有線 (USB-C) 版は使いたいデバイスにつなぐだけで簡単に使うことができます。 Bluetooth 版も面倒な組み込みプログラミングは必要なく、 Python を用いて簡単に設定ファイルを編集できます。
      </>
    ),
  },
  {
    title: 'べんり',
    description: (
      <>
      有線 (USB-C) 版は <a href="https://get.vial.today/">Vial</a> を使うことで <a href="https://vial.rocks/">Google Chrome 上から簡単にキーアサインを変更</a>できます。
      </>
    ),
  },
  {
    title: 'あんしん',
    description: (
      <>
      邪神ちゃんフェス2での頒布物のため権利関係上の問題がクリアで安心して利用することができます。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
