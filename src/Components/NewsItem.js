import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } =
            this.props;
        return (
            <div className='my-3'>
                <div className='card'>
                    <span
                        class='position-absolute top-0 translate-middle badge rounded-pill bg-danger'
                        style={{ left: '90%', zIndex: '1' }}
                    >
                        {source}
                    </span>
                    <img
                        src={
                            !imageUrl
                                ? 'https://image.cnbcfm.com/api/v1/image/108068011-1732601507534-gettyimages-2155830976-SCOTT_BESSENT_INTERVIEW.jpeg?v=1732602177&w=1920&h=1080'
                                : imageUrl
                        }
                        className='card-img-top'
                        alt='...'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{description}</p>
                        <p className='card-text'>
                            <small>
                                By {author ? author : 'Unknown'} on{' '}
                                {new Date(date).toUTCString()}{' '}
                            </small>
                        </p>
                        <a
                            href={newsUrl}
                            target='_blank'
                            className='btn btn-sm btn-dark'
                            rel='noreferrer'
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
