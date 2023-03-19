import './Card.css';

export default function Card(props) {
  const classes = 'card ' + props.className; //string concatenation, "space" between card and props is important

  return <div className={classes}>{props.children}</div>;
}