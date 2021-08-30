import PropTypes from "prop-types"
import styled from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(item =>
                <button
                className={styled.btnFeedback}
                type="button"
                key={item}
                onClick={() => onLeaveFeedback(item) }
                >
                    {item}
            </button>
            )
            }
        </div>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;