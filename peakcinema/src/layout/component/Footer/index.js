/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);

function Footer({ className }) {
    return (
        <div className={cs('wrapper', className)}>
            <div className={cs('info')}>
                <h4 className={cs('heading')}>Contact</h4>
                <ul className={cs('list')}>
                    <li className={cs('item')}>
                        <a href="tel:phonenumber" className={cs('item-link')}>
                            <FontAwesomeIcon className={cs('icon')} icon={faPhone} />
                            Phone Number : kocotieude
                        </a>
                    </li>

                    <li className={cs('item')}>
                        <a href="mailto:youremail" className={cs('item-link')}>
                            <FontAwesomeIcon className={cs('icon')} icon={faEnvelope} />
                            Email : dangsang@gmail.com
                        </a>
                    </li>

                    <li className={cs('item')}>
                        <a href="" className={cs('item-link')}>
                            <FontAwesomeIcon className={cs('icon')} icon={faHome} />
                            Address : Thu Duc - HCM
                        </a>
                    </li>
                </ul>
            </div>

            <div className={cs('info', 'info_follow')}>
                <h4 className={cs('heading')}>Follow Me</h4>
                <ul className={cs('list')}>
                    <li className={cs('item')}>
                        <a href="https://web.facebook.com/ndsanggg0510" target="_blank" className={cs('item-link')}>
                            <FontAwesomeIcon className={cs('icon')} icon={faFacebook} />
                            Facebook
                        </a>
                    </li>

                    <li className={cs('item')}>
                        <a href="https://www.instagram.com/s4ngnguyen.__/" target="_blank" className={cs('item-link')}>
                            <FontAwesomeIcon className={cs('icon')} icon={faInstagram} />
                            Instagram
                        </a>
                    </li>

                    <li className={cs('item')}>
                        <a href="" className={cs('item-link')}>
                            <FontAwesomeIcon className={cs('icon')} icon={faTelegram} />
                            Telegram
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
