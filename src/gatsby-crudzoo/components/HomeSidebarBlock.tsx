import React from "react"
import {Link} from 'gatsby'
import {SidebarTitle, Button} from 'gatsby-crudzoo'

export const HomeSidebarBlock = () => {
  return (
    <div>
      <SidebarTitle title={`Series`} />
        <Link to={`/series`} style={{display: "block", marginTop: "8px"}}>
          <Button style={{
            padding: "4px 12px"
          }}>Series List</Button>
        </Link>
    </div>
  )
}