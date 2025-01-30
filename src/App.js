import './App.css';

import React, { useState } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
    const pageSize = 5;
    const [progress, setProgress] = useState(0);

    return (
        <div>
            <Router>
                <NavBar />
                <LoadingBar color='#f11946' progress={progress} height={3} />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <News
                                setProgress={setProgress}
                                key='general'
                                pageSize={pageSize}
                                country='us'
                                category='general'
                            />
                        }
                    />
                    <Route
                        path='/business'
                        element={
                            <News
                                setProgress={setProgress}
                                key='business'
                                pageSize={pageSize}
                                country='us'
                                category='business'
                            />
                        }
                    />
                    <Route
                        path='/entertainment'
                        element={
                            <News
                                setProgress={setProgress}
                                key='entertainment'
                                pageSize={pageSize}
                                country='us'
                                category='entertainment'
                            />
                        }
                    />
                    <Route
                        path='/general'
                        element={
                            <News
                                setProgress={setProgress}
                                key='general'
                                pageSize={pageSize}
                                country='us'
                                category='general'
                            />
                        }
                    />
                    <Route
                        path='/health'
                        element={
                            <News
                                setProgress={setProgress}
                                key='health'
                                pageSize={pageSize}
                                country='us'
                                category='health'
                            />
                        }
                    />
                    <Route
                        path='/science'
                        element={
                            <News
                                setProgress={setProgress}
                                key='science'
                                pageSize={pageSize}
                                country='us'
                                category='science'
                            />
                        }
                    />
                    <Route
                        path='/sports'
                        element={
                            <News
                                setProgress={setProgress}
                                key='sports'
                                pageSize={pageSize}
                                country='us'
                                category='sports'
                            />
                        }
                    />
                    <Route
                        path='/technology'
                        element={
                            <News
                                setProgress={setProgress}
                                key='technology'
                                pageSize={pageSize}
                                country='us'
                                category='technology'
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
