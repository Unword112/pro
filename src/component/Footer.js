import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Route , Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="app-footer">
                        <div>
                            <a>Copyright</a>
                            <span>&copy; 2019 SDTC</span>
                        </div>
            <div class="ml-auto">
                <span>Powered by</span>
                <a href="https://www.youtube.com/channel/UCC552Sd-3nyi_tk2BudLUzA"> AsapSCIENCE</a>
                <spam> Youtuber</spam>
            </div>
                </footer>
            </div>
        )
    }
}
