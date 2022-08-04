import Segment from "./Segment";

export default class Ride {

    segments: Segment[] = [];
    NORMAL_FARE = 2.10;
    OVERNIGHT_FARE = 3.90;
    SUNDAY_FARE = 2.9;
    OVERNIGHT_SUNDAY_FARE = 5;

    constructor () {
    }

    addSegment (distance: number, date: Date) {
        this.segments.push(new Segment(distance, date));
    }

    finish() {
        let fare = 0;
	    for (const segment of this.segments) {
            if (segment.isOvernight() && !segment.isSunday()) {
				fare += segment.distance * this.OVERNIGHT_FARE;
				continue;
			}
            if (segment.isOvernight() && segment.isSunday()) {
				fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
                continue;
            }
            if (segment.isSunday()) {
				fare += segment.distance * this.SUNDAY_FARE;
				continue;
			}
            fare += segment.distance * this.NORMAL_FARE;
        }
        return fare;
    }

}