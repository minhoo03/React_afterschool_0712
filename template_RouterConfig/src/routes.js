import React from 'react'

import A01FuncProps from './components/A01FuncProps'
import A02FuncEvent from './components/A02FuncEvent'
import A03FuncEvent from './components/A03FuncEvent'
import A04History from './components/A04History'
import A05MatchParam from './components/A05MatchParam'
import A06Arguments from './components/A06Arguments'
import A07ChildComponent from './components/A07ChildComponent'
import NotFoundComponent from './components/NotFoundComponent'

const user = {name: 'HungBu', age: 20};
const ary = ['a', 'b', 'c'];
const onPlus = (x, y) => {
  return `${x} + ${y} = ${x + y}`;
}

export const routes = [
    { path: '/', exact: true, render: () => <div><h3>Index Page</h3></div> },
    { path: '/A01Comp', render: () => <A01FuncProps name="Minu" age={19} user={user} ary={ary} onPlus={onPlus} isChecked /> },
    { path: '/A02Comp', component:A02FuncEvent },
    { path: '/A03Comp', component:A03FuncEvent },
    { path: '/A04History', component:A04History },
    { path: '/A05MatchParam/:num/data/:name', component:A05MatchParam },
    { path: '/A06Arguments', component:A06Arguments },
    { path: '/A07Child', component:A07ChildComponent,
        routes: [
          {path : '/A07Child', exact: true, render: () => {
            return (
              <div>
                <h4>One Child</h4>
                <div>This is One Child Component</div>
              </div>
            )
          }},
          {path : '/A07Child/two/:id', exact: true, render: (props) => {
            const { match } = props
            return (
              <div>
                <h4>Two Child</h4>
                <div>This is Two Child Component</div>

                <div>
                  ID: {match.params.id}
                </div>
              </div>
            )
          }},
          {path : '/A07Child/three', exact: true, render: () => {
            return (
              <div>
                <h4>Three Child</h4>
                <div>This is Three Child Component</div>
              </div>
            )
          }}
        ]
    },
    { path: '/*', component:NotFoundComponent },
]
