import React from "react"
import { Link } from "gatsby"
import cn from "classnames"
import styles from "./HomeHero.module.css"
import {Button} from 'gatsby-crudzoo'

interface HomeHeroDescriptionProps {
  description: string
}
export const HomeHeroDescription: React.FC<HomeHeroDescriptionProps> = props => {
  return (
    <React.Fragment>
        This is my site. 
        <br />
        <span className={cn(styles.checkText)}>
        Your comments and suggestions are welcome!
        </span>
        <Link to={`/blog/about`} style={{display: "block", marginTop: "24px"}}>
          <Button style={{padding: "2px 16px"}}>About Us</Button>
        </Link>
    </React.Fragment>
  )
}
