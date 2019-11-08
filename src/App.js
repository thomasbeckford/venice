import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from './_components/Navbar'
import './_assets/_scss/navbar.scss';
import './_assets/_scss/stylesheet.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Julia from './_assets/_img/Julia.jpg'
import Miguel from './_assets/_img/Miguel.jpg'

function App() {
  return (
    <div className="App cont">
      <div className="background">
          <Navbar />
					<section id="home" className="home">
					<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
						<h1 className="title">Venice <br/> Curatorial <br/> Course</h1>
					</ScrollAnimation>
					<ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>	
						<h2>July 2020</h2>
					</ScrollAnimation>
						<div className='arrow-down' >
							<a href='#why'>
								<i className='animated pulse infinite fas fa-angle-double-down'style={{fontSize:'48px'}}></i>
							</a>
						</div>
					</section>


					<section id="why" className="why">
						<h2 className="title">Why</h2><br/>
						<ScrollAnimation animateIn='fadeIn'>
						<p>
						Venice Curatorial Course is a one-month intensive curatorial program. We bring
together professionals, students and researchers from all over the globe in a network
of curators, artists, collectors, art dealers and experienced people related to the art
world, who work independently or as part of both private and public institutions
worldwide.
The course methodology ranges from specific theoretical lectures to a practical
approach, composed by discussions and debates strongly focused on what the
students need to know to develop in a professional way the role of curators.
We will work together in conceiving, structuring and setting up a real project,
encouraging and reinforcing specific skills that have to be considered such as:
structuring and developing concepts, writing and speaking in public, among other
specific workshops. Relevant figures and technics as well as a financial approach to
the work will also be considered, in order to cover a global vision of what a curator
needs to take into account when curating a project.
The program includes studio visits and the chance of meeting relevant figures in the
Venetian contemporary art reality. Venice Curatorial Course gives the students a
chance to gain practice and theoretical knowledge to be able to face and respond
with success to the opportunities of developing a career as a curator.
						</p>
						</ScrollAnimation>
					</section>


					<section id="where" className="where">

						<h2 className="title">Where</h2><br/>
						<ScrollAnimation animateIn='fadeIn'>
						<p>
						Venice is well known for its immeasurable beauty. The city of narrow dimensions,
surrounded by canals and hidden treasures, is without a doubt, one of Italy’s most
beautiful and popular landmarks. The rhythm and human approach of Venice is
special, somewhere between a village and a great city. The countless museums and
frequent renowned international art events, like Bienniale of Art and Architecture or
Mostra del Cinema, make it a mecca for art lovers and professionals of the field.
Venice’s diversity will allow students to build their network beyond the course itself.
The city is compact and accessible and students can expose themselves to all the
culture and opportunities that Venice has to offer, becoming locals for one month.
The course will dialogue with the city and will give the students the necessary tools
to experience events happening in Venice, interacting with the environment,
attending openings, visiting exhibitions and enjoying the artistic scene of the city.
The next edition of the Biennial will be based on the title ‘How we will live together”.
The national pavilions and other collateral events will be guided by this notion,
overseen by several curators who will rethink the spaces and conceptualize the
exhibitions to be an ideal set for students to immerse themselves in. The course will
encourage the students to get involved in the gallery ecosystem, foundations,
associations and other cultural initiatives in the city.
							</p>
						</ScrollAnimation><br/><br/>
	

					</section>

					<section id="program" className="program">
						<ScrollAnimation animateIn='fadeIn'>
						<h2 className="title">Program</h2>
					<p style={{fontSize: '20px'}}>One month of intensive course divided in 4 weeks:</p><br/>
					



<div className="tworows">
<div className="wrp">
  <div className="week-p">
			<p><b>WEEK 1. THEORY. KEY FIGURES.</b></p>
				Guests: International Curator, art dealer, collector, gallery director.<br/>
				•Curator: Role and responsibilities of contemporary art curator.<br/>
				•History of curatorial practice: Origins, historic development and current status.<br/>
				•Relevant and key figures within the art world who work or collaborate with the curator.<br/>
				•History of exhibition making.<br/>
				•Curatorial projects: exhibitions, bienniales, festivals, art fairs, artistic residencies, external commissions etc.<br/>
				•Art Dealer: competences and relationship with curators.<br/>
				•Collector: competences and relationship with curators.<br/>
				•Gallery owner: competences and relationship with curators.<br/>
  </div><br/>
  <div className="week-p">
			<p><b>WEEK 2: EXHIBITION STRUCTURE. PRODUCTION.</b></p>
			Guest: Exhibition coordinator.<br/>
			•Setting up an exhibition.<br/>
			•Logistics: shippings.<br/>
			•Installation, assembly, disassembly, opening.<br/>
			•Insurances, taxes, invoices and fiscal issues. <br/>
  </div><br/>
</div>

<div className="wrp">
  <div className="week-p">
		<p><b>WEEK 3: COMMUNICATION.</b></p>
		Guests: Communication manager and project manager.<br/>
		• Promotion: press release, press articles, magazine features, etc.<br/>
		• Research, bibliographic references, key notes, footnotes.<br/>
		• How to research on a concept.<br/>
		• Projects: how to present a project, how to speak in public, how to structure a presentation,<br/>
		 forms of speech. Adapting the scripture to the audience and format.<br/>
		• How to make interviews and give a structured speech. <br/>
  </div><br/>
  <div className="week-p">
			<p><b>WEEK 4: FINAL PROJECT</b></p>
			• Presentation of concept for the final project.<br/>
			• Research of existing open calls and exhibition spaces in which sending or applying
			the final project.<br/>
			• Selection of the space, selection of artists.<br/>
			• Presentation of Final dossier.<br/>
  </div>
</div>
</div>

				<span style={{opacity:0}}>.</span>


				</ScrollAnimation>
			</section>

				
				<section>
					<div className="flex margin-top-300" style={{paddingTop: '100px'}}>
							<div >
								<ScrollAnimation animateIn='fadeIn' >
								<div className="text-left margin-right-15" >
								<h2 className="title" id="duration">Duration & Structure</h2><br/><br/>
								<p>Duration: four weeks from Monday to Friday.<br/>
								Timetable from 9 to 6pm with two 30 min coffee breaks and 1-hour
								lunch break.<br/><br/>

								The course is structured in 4 weeks which will follow on different
								topics.<br/><br/>

								Every WEDNESDAY Afternoon: Visit or additional activity.<br/><br/>

								Every FRIDAY Afternoon: One to One meetings to follow up
								possible queries and additional support required.<br/><br/>

								Most of the afternoons will be used for workshops<br/><br/>

								The course will be developed by the organizers/tutors and supported
								by special guests from different fields:

								Curator, Art Dealer, Collector, Artist, Gallery Director, Press Office
								Manager, Exhibitions Coordinator, etc.</p>
								</div>
								</ScrollAnimation>
							</div>

							<div>
							<ScrollAnimation animateIn='fadeIn'>
							<section>
								<div className="text-left margin-left-15">
								<h2 className="title" >Who is it aimed at?</h2><br/><br/>
								<p style={{fontSize: '27px'}}>The program is designed for students who, engaging with art and contemporary
								culture, wish to take up the challenge of contemporary curating as an artistic, social

								and critical commitment. They should be interested in cultural and artistic assets,
								aiming to develop their professional practice in this area.<br/>
								Graduate students or professionals who want to deepen their knowledge and
								improve their practical skills are welcome.<br/>
								Our program is aimed at people with a study background in any of the following
								areas of contemporary art: curatorial studies, theory and philosophy of art, art
								history, art management and art production, visual arts, fine arts, new media,
								architecture, interior design, photography, design, as well as university graduates in
								the cultural studies field. The program is also suitable for candidates who have
								acquired curatorial skills through practical experience.</p>
								</div>
								</section>
								</ScrollAnimation>
							</div>
						</div>
					</section>

					<div className="margin-top-300">
					<section>
					<ScrollAnimation animateIn='fadeIn'>
						<h2 className="title" id="howtoapply">How to apply?</h2><br/>
							<div className="howtoapply">
							<p>The application for the Venice Curatorial Course is constantly open but we have deadlines for each edition. The
							deadline every year is March 15th. Classes begin, every year, on the first Monday of July.</p>
							<div  className="text-left">
							<p><u>To apply it is necessary to submit:</u></p>
								
								<ul >
									<li>• <a href="VENICECURATORIALCOURSEApplicationform.pdf" download>application form</a></li>
									<li>• CV</li>
									<li>• Personal statement explaining the reasons you are applying to the Course. (max 500 words)</li>
									<li>• Short abstract/concept of an exhibition you would like to undertake. (max 100 words).</li>
									<li>• <u>Deadline: March 15th, 2020.</u></li>
									<li>• <u>For no-EU students:</u> As soon as you receive and accept the formal invitation to participate, you must start the
								visa procedures. If selected, you are required to obtain a study visa or a tourist visa which must cover the
								entire duration of the Course. Students bear all costs involved in the visa procedure.</li>
								</ul>


							</div>
							</div>
						</ScrollAnimation>
						</section>
					</div>

					<div className="margin-top-300">
					<ScrollAnimation animateIn='fadeIn'>
						<section>
						<h2  className="title" id="terms">Fees/ Terms and conditions:</h2><br/>
						<div className="text-left">
							<p>The total amount of the fee is <b>1600 €</b>.</p>
							<ul>
							<li>• Submissions/applications deadline: <b>March 15th</b>.</li>

							<li>• Confirmation of selected students: <b>March 30th</b>.</li>

							<li>• Reservations for students' spots/place are formalized upon payment of registration fee €100 by April 6th.</li>

							<p>The remaining fees (non refundable) can be paid following two options as follows:</p>

							<li>• <b>Full</b> remaining <b>payment</b> of €1500 by <b>May 1st</b>.</li>

							<li>• <b>Two installments</b> of 750€ each, paid as follows: First installment of €750 to be paid by <b>April 15th</b>, second installment and
							remaining amount of €750 to be paid by <b>May 1st</b>.</li><br/>

							<p><b>Other information</b>: Accommodation and living expenses are not provided by the program. However we are able to provide a full
							support and options in finding apartments and rooms in Venice.</p>

							<p><u>We will provide all the information required, tips and support as soon as your participation is confirmed and the first fee is
							accomplished</u>. We will help you to become a venetian for one month! <br/></p>

							<p>Visa or other travel documents necessary for Italy should be worked out in time by the student.<br/>

							The school provides invitation letter which is helpful to get the visa.<br/><br/></p>

							<li>• Teaching language: English
							All applicants are expected to have an effective knowledge of English, both spoken and written.</li>

							<div className="text-right"><i>*all fees and deadlines correspond to year 2020</i></div>
							</ul>
						</div>
						</section>
						</ScrollAnimation>
					</div>


					<div className="margin-top-300">
					<ScrollAnimation animateIn='fadeIn'>
					<section>
						<h2  className="title" id="tutors">Co-organisers and tutors</h2><br/>
						<div className="flex">
							<div className="justify-no">
									
										<img height="200px" src={Miguel} alt="Miguel"/>
									
									<p style={{fontWeight: "bold"}}>Miguel Mallol</p>

									<p>Miguel is currently an International Independent Curator, Director of Enclave
									Land Art Residency, Art Critic and works at the Spanish Pavilion for Venice
									Biennale. <br/>

									Having graduated in History of Art, he finished his studies at Lancaster
									University (UK). He extended initially his formation in Venice at Fondazione
									Querini Stampalia and Venice Biennale among other professional experiences
									in Italy and UK.<br/>

									He curated projects independently in several cities as London, Milan, Rome
									or Venice in which he has collaborated with private and public institutions. As
									an Art Critic he is member of Valencia Art Critics Association and he has
									written articles, essays and texts for catalogues in newspapers, blogs and
									contemporary art specialised websites in different languages.</p>
							</div>
							<div className="justify-no">
								
								<img height="200px" src={Julia} alt="Julia"/>
								
									<p style={{fontWeight: "bold"}}>Julia Terzano</p>

									<p>Julia is currently co-founder of Curate for Change, a start-up dedicated to
									work on site specific, innovative and participative installations, aiming to
									raise awareness and mobilize action on social issues.<br/>

									Having graduated from Law School, Julia has completed her education in the
									art field, in London, Barcelona and Venice.<br/>

									She has freelanced for different brands both as content Curator and
									photographer in Buenos Aires, London and Barcelona; and has worked for
									Side Gallery in Barcelona as an Associate Curator and communication
									manager. She has also major knowledge in art production, having worked in
									renowned art fairs as Art Basel, PAD London, Frieze London and the Venice
									Art Biennale.</p>
							</div>
						
						</div>
						</section>
						</ScrollAnimation>
						</div>
						

					<section id="contactus" className="contactus">
					<div className="margin-top-300" style={{marginBottom: '200px'}}>
						<h2 className="title">Contact Us</h2><br/>
							<p>+39 348 4537379</p>

							<p>+34 665 409137</p>

							<p>curatorialcoursevenice@gmail.com</p>

							<p style={{margin: '0px', paddingBottom: '150px'}}>@venicecuratorialcourse</p>
							</div>
					</section>

      </div>
    </div>
  );
}

export default App;
