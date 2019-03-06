import React, { Component } from 'react';
import { getPeople } from './Utilities';
import Loading from './Loading';
import  StackGrid, { transitions, easings }from 'react-stack-grid';

class App extends Component {

	state = {
		isLoading: false,
		people: [],
		filteredPeople: []
	}

	componentDidMount() {
		this.setState({isLoading: true})
		new Promise((resolve, reject) => {
			getPeople('https://swapi.co/api/people/', [], resolve, reject)
		})
		.then(response => this.setState({
			isLoading: false,
			people: response,
			filteredPeople: response
		}))
	}

	compareBy(key){
        this.setState({
            filteredPeople: this.state.people.filter(person => {
                return person.gender === key ;
            })
        })

    }

	reset(){
        this.setState({
            filteredPeople: this.state.people
        })
	}
	
	render() {
		const { isLoading , people,filteredPeople } = this.state
		const genders = [...new Set(people.map(name => name.gender))]
		const transition = transitions.scaleDown;
		return (
			isLoading === true ? <Loading/>
			:<section>
				<div>
					<button
						type="button"
						onClick={() => this.reset()}
						key="reset"
						>
						all
					</button>
					{genders.map(gender => {
						return (
							<button
								type="button"
								onClick={() => this.compareBy(gender)}
								key={gender}
							>
								{gender}
							</button>
						)
					})}
				</div>
				<div>
					<StackGrid
						columnWidth={100}
						gutterWidth={15}
						gutterHeight={30}
						duration={600}
						easing={easings.cubicOut}
						appearDelay={60}
						appear={transition.appear}
						appeared={transition.appeared}
						enter={transition.enter}
						entered={transition.entered}
						leaved={transition.leaved}
					>
						{filteredPeople.map((names,key) => {
							return <p key={key} className='person'>{names.name}</p>
						})}
					</StackGrid>
				</div>
			</section>
		);
	}
}

export default App;