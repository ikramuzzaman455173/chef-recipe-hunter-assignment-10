import { FaFilePdf } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const BlogContent = () => {

  const downloadPDF = () =>{
    const capture = document.querySelector('.blog');
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('blog.pdf');
    })
  }

  return (
    <>
      <button onClick={downloadPDF}
        className="flex items-center justify-center text-xl font-bold border-2 p-2 rounded mt-4 awesome-btn">
        Download Pdf Blog <FaFilePdf className="pl-2 text-3xl"/>
      </button>
      <section className="bg-slate-200 container px-5 mx-auto flex flex-wrap items-center my-10 rounded-md blog">
        <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6 ">
          <h2 className="mb-10 text-3xl text-center lg:text-4xl tracking-tight font-extrabold text-slate-500">
            Blog Faq Sections
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 ">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-blue-500">1. </span>Tell us the differences between uncontrolled and controlled
                components?
              </h4>
              <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400">
                <span className="text-blue-500">Ans: </span> <strong>controlled components</strong> In React, controlled
                components refer to components that have their state and behavior controlled by the parent component.
                These components rely on props passed down from the parent component to update their state and behavior.
                Uncontrolled components refer to components that manage their own state internally.
              </p>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-blue-500">2. </span>How to validate React props using PropTypes?
              </h4>
              <p className="mb-5 font-normal text-md text-gray-600 dark:text-gray-400">
                <span className="text-blue-500">Ans: </span> <strong>React PropTypes</strong> is a way to validate the
                props passed to a React component. It helps to ensure that the props are of the expected type and have the
                expected values.
              </p>
              <ul className="list-decimal pl-4 marker:text-blue-500 font-bold">
                <li className="li-tag">PropTypes.string: This validator checks if the prop is a string.</li>
                <li className="li-tag">PropTypes.number: This validator checks if the prop is a number.</li>
                <li className="li-tag">PropTypes.bool: This validator checks if the prop is a boolean.</li>
                <li className="li-tag">PropTypes.array: This validator checks if the prop is an array.</li>
                <li className="li-tag">PropTypes.object: This validator checks if the prop is an object.</li>
              </ul>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-blue-500">3. </span>Tell us the difference between nodejs and express js?
              </h4>
              <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400">
                <span className="text-blue-500">Ans: </span> The difference between <strong>nodejs and express js</strong>
                NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to
                build scalable network applications. Express is a minimal and flexible Node. js web application framework
                that provides a robust set of features for web and mobile applications..
              </p>
            </article>

            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white">
                <span className="text-blue-500">4. </span>What is a custom hook, and why will you create a custom hook?
              </h4>
              <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400">
                <span className="text-blue-500">Ans: </span> Custom React JS hooks are{' '}
                <strong>
                  reusable functions that a React JS software developer can use to add special and unique functionality
                  to the React applications.
                </strong>
                .Usually, if there is a requirement to add a feature, one can install a third-party library and solve the
                problem.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;