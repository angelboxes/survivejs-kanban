import LaneActions from '../actions/LaneActions';

export default class LaneStore {
	constructor() {
		this.bindActions(LaneActions);
		this.lanes=[];
	}
	create(lane){
	//If 'notes' aren't provided for some reason, 
	// default to an aempty array
	lane.notes = lane.notes || [];
	this.setState({
		lanes:this.lanes.concat(lane)
	})	
	}
	attachToLane({laneId, noteId}) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.notes.includes(noteId)) {
					lane.notes = lane.notes.filter(note => note !== noteId);
				}

				if (lane.id === lane.id){
					lane.notes = lane.notes.concat([noteId]);
				}
			})

		})
	}
}