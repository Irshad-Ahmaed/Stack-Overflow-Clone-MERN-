import React, { useState } from 'react'

const WidgetTags = () => {

  const tags1 = [
    {name: 'c', value: 8452},
    {name: 'javascript', value: 252684},
    {name: 'java', value: 219786},
    {name: 'c#', value: 191548},
    {name: 'android', value: 191730},
    {name: 'html', value: 118734},
    {name: 'jquery', value: 103828},
    {name: 'c++', value: 80382}
  ]
  const tags2 = [
    {name: 'mern', value: 9788452},
    {name: 'mongodb', value: 4052684},
    {name: 'Mysql', value: 3219786},
    {name: 'NextJS', value: 91548},
    {name: 'NodeJS', value: 3191730},
    {name: 'php', value: 1464683},
    {name: 'python', value: 2191582},
    {name: 'reactJS', value: 480382},
    {name: 'css', value: 5980382}
  ]

  const [showMore, setShowMore] = useState("");

  const changeShowMore = () =>{
    setShowMore(
      tags2.map((tags) => (
        <div style={{display:"flex", alignItems:"baseline", justifyContent:"center"}}>
          <p key={tags}>{tags.name}</p> &nbsp; &nbsp; <span> x &nbsp; {tags.value}</span> 
        </div>
      ))
    )
  }

  return (
    <div className='widget-tags'>
      <h3>Related Tags</h3>
      <div className='widget-tags-div'>
        {
          tags1.map((tag) => (
            <div style={{display:"flex", alignItems:"baseline", justifyContent:"center"}}>
              <p key={tag}>{tag.name}</p> &nbsp; &nbsp; <span> x &nbsp; {tag.value}</span> 
            </div>
          ))
        }
        
        {showMore}
        <span onClick={changeShowMore} style={{marginTop:"10px", color:"#3e66eb", cursor:"pointer"}}>{showMore=="" && "more related tags"}</span>

      </div>
    </div>
  )
}

export default WidgetTags