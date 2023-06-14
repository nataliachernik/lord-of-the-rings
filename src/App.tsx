import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Header from './pageComponents/header/Header'
import Game from './components/game/Game'
import Movies from './components/movies/Movies'
import Characters from './components/characters/Characters'

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
