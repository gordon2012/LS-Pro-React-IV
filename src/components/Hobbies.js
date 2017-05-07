import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div>
                <h2>My Hobbies</h2>
                <h3>Here are some of my favorite things</h3>
                <ul>
                    <li>Video Games
                        <ul>
                            <li>EverQuest</li>
                            <li>Minecraft</li>
                            <li>Rimworld</li>
                        </ul>
                    </li>
                    <li>Movies
                        <ul>
                            <li>The Avengers</li>
                            <li>Deadpool</li>
                            <li>Office Space</li>
                        </ul>
                    </li>
                    <li>TV Shows
                        <ul>
                            <li>Mr. Robot</li>
                            <li>Silicon Valley</li>
                            <li>Game of Thrones</li>
                        </ul>
                    </li>
                    <li>Also enjoy:
                        <ul>
                            <li>Gardening</li>
                            <li>Running</li>
                            <li>Puppies</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
