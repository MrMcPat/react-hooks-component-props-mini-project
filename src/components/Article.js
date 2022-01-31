import React from 'react';

const Article = ({title, date, preview, minutes}) => {
  const emoji = minutes < 30 ? coffee(minutes) : bento(minutes);

  function coffee (minutes) {
    let coffees = ""
    for (let i = minutes; i>=5; i=i-5) {
      coffees = coffees + "☕️";
    }
    return coffees
  }

  function bento (minutes) {
    let bentos = ""
    for (let i = minutes; i>=10; i=i-10) {
      bentos = bentos + "🍱"
    }
    return bentos
  }

  return <article>
      <h3>{title}</h3>
     {date ? <small>{date} {emoji} {minutes} min read</small> : <small>January 1, 1970 {emoji} {minutes} min read</small>}
      <p>{preview}</p>
  </article>;
};

export default Article;
