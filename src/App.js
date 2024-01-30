import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import IntroText from './components/IntroText';
import Step from './components/Step';
import Steps from './components/Steps';

const App = () => {
  return (
    <div className="App">
      <Header />
      <body className='page-body'>
        <h1 className='text-header'>Setting Up Your Gmail Signature</h1>
        <IntroText />
        {Steps.map((step) => {
          return(<Step number={step.number} title={step.title} content={step.content} />)
        })}
      </body>
    </div>
  );
}

export default App;
