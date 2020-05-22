import React from 'react'
import Card from './card'

const cardListData = [
    {
        username: '@HomerLopez',
        id: 1,
        followers: '1483',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name: 'facebook'
    },
    {
        username: '@HomerLopez',
        id: 2,
        followers: '2845',
        todayFollowers: 20,
        icon: 'images/icon-twitter.svg',
        name: 'twitter'
    },
    {
        username: '@HomerLopez',
        id: 3,
        followers: '6450',
        todayFollowers: 30,
        icon: 'images/icon-instagram.svg',
        name: 'instagram'
    },
    {
        username: '@HomerLopez',
        id: 4,
        followers: '1587',
        todayFollowers: -50,
        icon: 'images/icon-youtube.svg',
        name: 'youtube'
    }
]

function TopCardList() {
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                    }
                    {/*<article className="card twitter">
                        <p className="card-title">
                            <img src="images/icon-twitter.svg" alt=""/>
                                @Homerlopez
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">28k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt=""/>
                                12 Today
                        </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="images/icon-instagram.svg" alt=""/>
                                @Homer_lv
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">6k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt=""/>
                                12 Today
                        </p>
                    </article>
                    <article className="card youtube">
                        <p className="card-title">
                            <img src="images/icon-youtube.svg" alt=""/>
                                @HomerLopez
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">12k</span>
                            <span className="card-followers-title">Followers</span>
                        </p>
                        <p className="card-today">
                            <img src="images/icon-up.svg" alt=""/>
                                12 Today
                        </p>
                    </article>
                    */}
                </div>
            </div>
        </section>
    )
}

export default TopCardList;