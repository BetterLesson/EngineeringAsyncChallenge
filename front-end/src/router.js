// The purpose of this file is to route to the appropriate scene
// given a particular path
import { CoachingExperts } from './scenes';

export default function route(path) {
    switch (path) {
        default:
            return <CoachingExperts />;
    }
}
