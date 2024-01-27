import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import IntroText from './components/IntroText';
import Step from './components/Step';
import {step0, step1, step2, step3, step4} from './components/Steps';

const App = () => {
  return (
    <div className="App">
      <Header />
      <body className='page-body'>
        <h1 className='text-header'>Setting Up Your Gmail Signature</h1>
        <IntroText />
        <Step number={step0.number} title={step0.title} content={step0.content} />
        <Step number={step1.number} title={step1.title} content={step1.content} />
        <Step number={step2.number} title={step2.title} content={step2.content} />
        <Step number={step3.number} title={step3.title} content={step3.content} />
        <Step number={step4.number} title={step4.title} content={step4.content} />
      </body>
    </div>
  );
}

export default App;
