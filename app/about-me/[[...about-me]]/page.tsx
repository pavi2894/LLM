"use client";
import React, { useState } from 'react';


const AboutMe: React.FC = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showProjects, setShowProjects] = useState(false); // Declare and initialize showProjects state

  const toggleAboutMe = () => {
    setShowAboutMe(true);
    setShowProjects(false);
  };

  const toggleProjects = () => {
    setShowAboutMe(false);
    setShowProjects(true);
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="container mx-auto py-8 text-center">
        <div className="flex justify-center"> 
          <button
            className={`bg-transparent border  font-medium py-2 px-4 rounded-l hover:bg-black-600 hover:text-white ${
              showAboutMe ? 'bg-black-600 text-white' : ''
            }`}
            onClick={toggleAboutMe}
          >
            About Me
          </button>
          <button
            className={`bg-transparent border  font-medium py-2 px-4 rounded-r hover:bg-black-600 hover:text-white ${
              showProjects ? 'bg-black-600 text-white' : ''
            }`}
            onClick={toggleProjects}
          >
            About Project
          </button>
        </div>
        <div>

        </div>
        {showAboutMe && (
          <>
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg font-normal text-left">
              Hey there, I am Pavithra Vijayakrishnan!!
            </p>
            <p className="text-md font-normal mt-4 text-left">
            <p>I am a proactive and results-driven professional with a track record of consistent performance. Throughout my career, I have consistently demonstrated my ability to drive positive change and deliver tangible results. At Amazon, USA I demonstrated my ability to work autonomously and deliver high-impact results. I successfully completed a project to capture backward incompatibility in code deployment within a tight deadline, utilizing previously unfamiliar internal tools and displaying a strong understanding of the codebase. Additionally, my critical thinking skills enabled me to identify significant flaws in the design for an ongoing feature change, earning appreciation from the product team and my manager. These experiences demonstrate my ability to take ownership, solve complex problems, and deliver outcomes that drive business success.
            </p> <br/>
            <p>
            At McFadyen Digital, India I developed an error detection tool that prevented our US-based client from incurring losses due to incorrectly configured coupons, which earned me recognition via a Christmas bonus. This achievement showcases my attention to detail, problem-solving skills, proactiveness and dedication to delivering exceptional performance. 
          </p> <br/>
          <p>
          During my tenure at F-Secure, Finland I took the initiative to investigate and address UI/UX issues faced by customers in our system. By collaborating with the user experience teams and spearheading improvements, I earned the title of UX champion of the IAM core team. This experience highlighted my ability to identify customer pain points and collaborate effectively with cross-functional teams to drive meaningful enhancements. 
          </p><br/>
          <p>
          One of my most notable achievements was during my MS thesis, where I independently collaborated with the research team at the University of Helsinki, Finland to develop a novel project on infant activity recognition using self-supervised methods. This research project resulted in a publication in Nature, reflecting my ability for independent research work in a challenging and fast-moving field. I was very passionate about this work and the mission was to help identify motor issues like Cerebral Palsy at a young age.
          </p><br/>             </p>
          </>
        )}
        {showProjects && (
          <>
            <br/>
            <h1 className="text-4xl font-bold">Project</h1>
            <ul className="text-lg font-normal text-left">
              <h3 className="font-bold">
              Why interactPDF?</h3>
              <p>

             
              The interactPDF is an application that help users to interact with an AI model and receive responses. Applications like ChatGPT have a few restrictions that this application attempts to overcome. The main functionality of this app, is to allow users to upload a pdf that will help provide more context to a pre-trained AI model. AI models have a learning cut-off, and thus may not be reliable for answering questions related to more recent events. Moreover there is a contraint on the length of context (also known as tokens) that can be fed to the AI model. 
              InteractPDF solves these problem by 
              <ul className="list-disc pl-5">
              <li>
                Allowing user to extend the context of AI model by sharing additional context information via an uploadable PDF. This is not fine-tuning with more data, but rather adding relavant context to the prompt to the AI model extracted from the PDF.
               </li>
               <li> Only the relevant context for the query is shared from the PDF thus overcoming the token limit problem for most cases.
               </li>
               <li>
                The uploaded PDF context will help provide a personalized response to user queries. 
               </li>
              </ul>
              The AI model used for this appliation is GPT-3.5 Turbo.
              <br/> <br/>
              </p>
              
              <h3 className="font-bold">
              How it works? 
              </h3>
              <p>
              <ul className="list-disc pl-5">
              <li>
              The user needs to login/signup to be able to upload a PDF.  
              </li>
              
              
              <li> 
              This PDF is currently stored in S3 and a chat session is created. Vercel AI SDK is used for streaming chat from the AI model response and asynchronously populating the chat table in databse on start and end events. The databse used is a serverless Postgre DB. 
              </li>
              <li>
              The PDF is retrieved from S3 and segmented to vectors. These vectors are in turn stored in a vector DB for fast indexing on vectors. The vector DB used here is PineCone DB. 
              </li>
              <li>
              The PDF is transformed and stored as multiple vector embeddings. 
              </li>
              <li>
              Next, the user question is vectorized and the DB queries for similarity. It is configured to return top 5 similar vector documents. Only the relevant documents with a similarity score above 0.7 is retained for subsequent operations. 
              </li>
              <li>
              The original content is obtained from the retained vectors that are further baked into the promt for AI model.
              </li>
              <li>
              The response from the AI model is streamed back and will be displayed on the window and uploaded asynchronously to the DB on response completion.
              </li>
              <li>
              The user may subscribe for unlimited PDF upload to the application. 
              </li>
              </ul>
              </p>
              <br/>
              <p className="font-bold">
              Features for paid users: </p>
              <p>
              Unlimited PDF uploads for 20$ monthly subscription 
              </p>
              <br/>
              <h4 className="font-bold">
              Limitations:
              </h4>
              <ul className="list-disc pl-5">
             <li>
             There is a level of randomness in the responses generated by the system from the AI model used. Additionally, for the same query, the application may not give identical responses.
            </li>
            <li>
             The PineCone DB free-tier service does not provide a namespace, which is required to extract data from only the relevant PDF. Currently, the content from all PDFs is matched, leading to probable confusion in model response. This can be avoided by upgrading to a paid version of PineCone DB and restricting the namespace to the current PDF used in the chat.
             </li>
             <li>
             Only one PDF per chat window.
            </li>
            </ul>
            <br/>
            <h4 className="font-bold">
            Terminology :
            </h4>
            <ul className="list-disc pl-5">
              
            <li>Vecor embedding and documents. 
            </li> 
            </ul>
            <p>Each PDF has multiple segments. These segments may correspond to paragraphs in the pdf. Each segment is vectorized into a documnet. Each vectorized document contains meta-data along with the vector embedding.
            </p> 


            
              
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

// Use useClient to mark the component as a Client Component
export default AboutMe;
