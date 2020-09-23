import React from 'react';
import './App.css';

function App() {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items.push(i);
  }
  return (
    <div>
      <header>
      </header>
      <div className="grid">
        <div>
          <h1>Cameron Blandford</h1>
          <p>These text-bits serve as reminders for articles I'd like to write, things I'd like to make and/or link to, and public accountability to follow through. I will also be cataloguing workouts and meditation sessions here.</p>
        </div>
        <div>
          <h2>Personal Links</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Photography</li>
            <li>Twitter</li>
            <li>Substack</li>
            <li>Wikipedia</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h2>Meditation</h2>
          <ul>
            <li>Where I started</li>
            <li>Where I am now</li>
            <li>Where I want to be</li>
          </ul>
        </div>
        <div>
          <h2>Blogroll</h2>
          <ul>
            <li><a href="https://slatestarcodex.com/">Slate Star Codex</a></li>
            <li><a href="https://xkcd.com/">XKCD</a></li>
            <li><a href="https://www.smbc-comics.com/">SMBC</a></li>
            <li><a href="https://meaningness.com/">Meaningness</a></li>
            <li><a href="https://kajsotala.fi/">Kaj Sotala</a></li>
            <li><a href="https://www.ribbonfarm.com/">Ribbonfarm</a></li>
            <li><a href="https://www.lesswrong.com/">Less Wrong</a></li>
            <li><a href="https://www.gwern.net/">Gwern Branwen</a></li>
            <li><a href="https://stefanfschubert.com/blog">Stefan Schubert</a></li>
            <li><a href="https://theunitofcaring.tumblr.com/">The Unit of Caring</a></li>
          </ul>
        </div>
        <div>
          <h2>Tweetroll</h2>
          <ul>
            <li>Kelsey Piper</li>
            <li>Scott Alexander</li>
            <li>Meaningness</li>
          </ul>
        </div>
        <div><h2>Mentorship</h2>
          <ul>
            <li>Why become a mentor?</li>
            <li>Why have a mentor?</li>
            <li>Hands-off mass-mentoring</li>
          </ul>
        </div>
        <div><h2>Effective Altruism</h2>
          <ul>
            <li>What is it?</li>
            <li>Why doesn't everyone do it? (Arguments and Misconceptions)</li>
          </ul>
        </div>
        <div>
          <h2>Rationalism</h2>
          <ul>
            <li>What is it?</li>
            <li>What isn't it?</li>
          </ul>
        </div>
        <div>
          <h2>Other Interests</h2>
          <ul>
            <li>Gardening</li>
            <li>Hydroponics</li>
            <li>Poetry</li>
            <li>Powerlifting</li>
            <li>Cooking</li>
            <li>Baking</li>
            <li>Pedagogy</li>
          </ul>
        </div>
        <div>
          <h2>Web Projects</h2>
          <ul>
            <li>foamflower</li>
            <li><a href="https://blandford.io/">old site</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
