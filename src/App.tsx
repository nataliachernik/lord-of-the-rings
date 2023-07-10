import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Header from './common/page/Header'
import Game from './features/game/Game'
import Movies from './features/movies/Movies'
import Characters from './features/characters/Characters'

import styles from './App.module.css'

function App() {
    return (
        <div className='App'>
            <Header/>
            <main>
                <Container className={styles.container}>
                    <div id='home' className={styles.home}>
                        <Container>
                            <Button href="#game">Play the Game</Button>
                        </Container>
                    </div>
                    <div id='game'>
                        <Game/>
                    </div>
                    <div id='movies'>
                        <Movies/>
                    </div>
                    <div id='characters'>
                        <Characters/>
                    </div>
                </Container>
            </main>
        </div>
    );
}

export default App;
