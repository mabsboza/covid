import Head from 'next/head'

const layout = (props) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8'/>
        <meta name='autor' content='mabsboza'/>
        <title>Corona Virus</title>
        <link rel='icon' href='/virus.ico'/>
      </Head>
      <div className="nk-body">
        <div className="nk-wrap">{props.children}</div>
      </div>
    </div>
  );
};

export default layout;
