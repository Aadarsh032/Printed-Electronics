import React from 'react'
import './PublishedPapers.css'
import published_papers_2024 from '../../assets/published_papers_2024'
import published_papers_2023 from '../../assets/published_papers_2023'
import published_papers_2022 from '../../assets/published_papers_2022'
import published_papers_2021 from '../../assets/published_papers_2021'
import published_papers_2020 from '../../assets/published_papers_2020'
import published_papers_2019 from '../../assets/published_papers_2019'
import published_papers_2018 from '../../assets/published_papers_2018'
import published_papers_2017 from '../../assets/published_papers_2017'
import published_papers_2016 from '../../assets/published_papers_2016'
import published_papers_2015 from '../../assets/published_papers_2015'
import published_papers_2013 from '../../assets/published_papers_2013'
import book_chapters from '../../assets/book_chapters'
import research_projects from '../../assets/research_projects'
import Conferences from '../../assets/conferences'

const PublishedPapers = () => {
  return (
    <>
      {/* Research projects */}
      <div className='publishedpapers'>
        <h1 className='publishedpapers-heading-main'>Research Projects <hr className='heading-underline' /></h1>
        <div className='publishedpapers-content'>
          <hr className='publishedpapers-content-timeline' />
          <div className='publishedpapers-content-papers'>

            {research_projects.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>

                <h1 className='publishedpapers-heading'>{papers.topic_name}</h1>
                <h1 className='publishedpapers-authors'><b>Project Instructor : </b>{papers.project_instructor}</h1>
                <h1 className='publishedpapers-authors'><b>Sanctioned amount : </b>{papers.sanctioned_amount}</h1>
                <h1 className='publishedpapers-authors'><b>Funding Agency : </b>{papers.funding_agency}</h1>

              </div>)
            })}
          </div>
        </div>
      </div>

      {/* Book Chapters */}
      <div className='publishedpapers'>
        <h1 className='publishedpapers-heading-main'>Book Chapters<hr className='heading-underline' /></h1>
        <div className='publishedpapers-content'>
          <hr className='publishedpapers-content-timeline' />
          <div className='publishedpapers-content-papers'>

            {book_chapters.map((chapters, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <p className='publishedpapers-authors1'>{chapters.book_description}</p>
              </div>)
            })}

          </div>
        </div>
      </div>
      {/* Published Papers */}
      <div className='publishedpapers'>
        <h1 className='publishedpapers-heading-main'>Published Papers<hr className='heading-underline' /></h1>
        <div className='publishedpapers-content'>
          <hr className='publishedpapers-content-timeline' />
          <div className='publishedpapers-content-papers'>
            <li>2024</li>
            {published_papers_2024.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1> 
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
            <li>2023</li>
            {published_papers_2023.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
            <li>2022</li>
            {published_papers_2022.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
            <li>2021</li>
            {published_papers_2021.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
            <li>2020</li>
            {published_papers_2020.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
            <li>2019</li>
            {published_papers_2019.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
            <li>2018</li>
            {published_papers_2018.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}

            <li>2017</li>
            {published_papers_2017.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}

            <li>2016</li>
            {published_papers_2016.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}

            <li>2015</li>
            {published_papers_2015.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}

            <li>2013</li>
            {published_papers_2013.map((papers, index) => {
              return (<div key={index} className='publishedpapers-content-papers-box'>
                <a className='publishedpapers-content-link' href={papers.topic_link} target='_blank'>
                  <h1 className='publishedpapers-heading'><u>{papers.topic_name}</u></h1>
                  <p className='publishedpapers-authors'><b>Authors : </b>{papers.topic_authors}</p>
                </a>
              </div>)
            })}
          </div>
        </div>
      </div>

        {/* Conferences */}
        <h1 className='publishedpapers-heading-main'>Conferences<hr className='heading-underline' /></h1>
        <div className='conferences'>
        {
          Conferences.map((value, index) => {
            return (
              <li className='conferences-list' key={index} >{value}</li>
            )
          })
        }
      </div>
    </>
  )
}

export default PublishedPapers;