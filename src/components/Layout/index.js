import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { PageHeader } from './styles'

const Layout = ({ children }) => (
  <Fragment>
    <Helmet
      title='Realtime calculator'
      link={[
        // {
        //   rel: 'stylesheet',
        //   href: '//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic'
        // },
        {
          rel: 'stylesheet',
          href: '//cdn.rawgit.com/necolas/normalize.css/master/normalize.css'
        }
      ]}
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]}
    />
    <div className='container'>
      <PageHeader>
        Realtime Calculator
      </PageHeader>
      {children}
    </div>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout
