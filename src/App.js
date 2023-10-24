import {Component} from 'react'
import {MdOutlineChair} from 'react-icons/md'

import './App.css'

let va = [
  {id: 0, book: '0', movie_name: 'leo'},
  {id: 2, book: '1', movie_name: 'leo'},
  {id: 3, book: '0', movie_name: 'leo'},
  {id: 4, book: '0', movie_name: 'leo'},
  {id: 5, book: '0', movie_name: 'leo'},
  {id: 6, book: '0', movie_name: 'leo'},
  {id: 7, book: '1', movie_name: 'leo'},
  {id: 8, book: '1', movie_name: 'leo'},
  {id: 9, book: '0', movie_name: 'leo'},
  {id: 10, book: '0', movie_name: 'leo'},
  {id: 11, book: '0', movie_name: 'leo'},
  {id: 12, book: '0', movie_name: 'leo'},
  {id: 13, book: '0', movie_name: 'leo'},
  {id: 14, book: '1', movie_name: 'leo'},
  {id: 15, book: '0', movie_name: 'leo'},
  {id: 16, book: '0', movie_name: 'leo'},
  {id: 17, book: '0', movie_name: 'leo'},
  {id: 18, book: '0', movie_name: 'leo'},
  {id: 19, book: '0', movie_name: 'leo'},
  {id: 20, book: '1', movie_name: 'leo'},
  {id: 21, book: '0', movie_name: 'leo1'},
  {id: 22, book: '0', movie_name: 'leo1'},
  {id: 23, book: '0', movie_name: 'leo1'},
  {id: 24, book: '0', movie_name: 'leo1'},
  {id: 25, book: '0', movie_name: 'leo1'},
  {id: 26, book: '0', movie_name: 'leo1'},
  {id: 27, book: '0', movie_name: 'leo1'},
  {id: 28, book: '0', movie_name: 'leo1'},
  {id: 29, book: '0', movie_name: 'leo1'},
  {id: 30, book: '0', movie_name: 'leo1'},
  {id: 31, book: '0', movie_name: 'leo1'},
  {id: 32, book: '0', movie_name: 'leo1'},
  {id: 33, book: '0', movie_name: 'leo1'},
  {id: 34, book: '1', movie_name: 'leo1'},
  {id: 35, book: '0', movie_name: 'leo1'},
  {id: 36, book: '0', movie_name: 'leo1'},
  {id: 37, book: '0', movie_name: 'leo1'},
  {id: 38, book: '0', movie_name: 'leo1'},
  {id: 39, book: '0', movie_name: 'leo1'},
  {id: 40, book: '0', movie_name: 'leo1'},
  {id: 41, book: '0', movie_name: 'leo1'},
  {id: 42, book: '0', movie_name: 'leo1'},
  {id: 43, book: '0', movie_name: 'leo1'},
  {id: 44, book: '0', movie_name: 'leo1'},
  {id: 45, book: '0', movie_name: 'leo1'},
  {id: 46, book: '0', movie_name: 'leo1'},
  {id: 47, book: '0', movie_name: 'leo1'},
  {id: 48, book: '0', movie_name: 'leo1'},
  {id: 49, book: '0', movie_name: 'leo1'},
  {id: 50, book: '0', movie_name: 'leo1'},
]

class App extends Component {
  state = {
    cool: JSON.parse(localStorage.getItem('cool')),
    qty: 0,
    select: 0,
    id: [],
    go: false,
  }

  componentDidMount() {
    const {cool} = this.state
    let v = null
    if (v === null) {
      localStorage.setItem('cool', JSON.stringify(va))
      v = 'l'
      v = 'kl'
      va = cool
    } else {
      v = null
      va = cool
    }
  }

  click = event => {
    const {qty, select, id} = this.state
    const v = event.target.id
    const d = document.getElementById(event.target.id)
    if (qty !== 0) {
      if (select < qty) {
        if (d === null) {
          console.log('l;')
        } else {
          d.style.color = 'green'
          this.setState({select: select + 1, id: [...id, v]})
        }
      } else {
        alert('max is reach')
      }
    } else {
      alert('please select qty')
    }
  }

  value = event => {
    const v = event.target.value
    this.setState({qty: parseInt(v)})
    console.log(v)
  }

  get = event => {
    const data = JSON.parse(localStorage.getItem('cool'))
    const change = event.target.value
    if (change === 'Normal') {
      const filter = data.filter(each => each.movie_name === 'leo1')
      console.log(filter)
      this.setState({cool: filter})
    } else if (change === 'Permium') {
      const filter = data.filter(each => each.movie_name === 'leo')
      console.log(filter)
      this.setState({cool: filter})
    } else {
      console.log('else')
      this.setState({cool: data})
    }
  }

  click1 = () => {
    const {id} = this.state
    console.log(id)
    const data = JSON.parse(localStorage.getItem('cool'))
    const d = data.map(each => {
      if (id.includes(each.id.toString())) {
        return {
          id: each.id,
          book: '1',
          movie_name: each.movie_name,
        }
      }
      return each
    })
    localStorage.removeItem('cool')
    localStorage.setItem('cool', JSON.stringify(d))

    this.setState({cool: JSON.parse(localStorage.getItem('cool'))})
    window.location.reload()
  }

  getid = event => {
    const {cool} = this.state
    console.log(cool)
    const v = cool.map(each =>
      each.book === '1' ? (
        <MdOutlineChair
          key={each.id}
          id={each.id}
          fontSize="90"
          className="icon"
        />
      ) : (
        <MdOutlineChair
          key={each.id}
          id={each.id}
          fontSize="100"
          className="icon1"
          onClick={this.click}
        />
      ),
    )
    return v
  }

  render() {
    return (
      <div>
        <h1>Leo</h1>
        <div>
          <select className="select" onChange={this.get}>
            <option value="Ticket">Ticket Type</option>
            <option value="Normal">Normal</option>
            <option value="Permium">Premium</option>
          </select>
          <select className="select1" onChange={this.value}>
            <option value="qty">Qty</option>
            <option value="1"> 1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="ms">
          <div className="jk">{this.getid()}</div>
          <div>
            <div>
              <MdOutlineChair fontSize="100" className="icon9" />{' '}
              <h1>Unavailable</h1>
            </div>
            <div>
              <MdOutlineChair fontSize="100" className="icon8" />{' '}
              <h1>Selected</h1>
            </div>
            <div>
              <MdOutlineChair fontSize="100" /> <h1>Free to book</h1>
            </div>
          </div>
        </div>

        <div className="class">
          <button type="button" onClick={this.click1}>
            Procsed
          </button>
        </div>
      </div>
    )
  }
}

export default App
