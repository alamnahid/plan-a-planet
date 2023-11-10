import  { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class PriceRangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 0,
      maxPrice: 100,
    };
  }

  handlePriceChange = (values) => {
    this.setState({ minPrice: values[0], maxPrice: values[1] });
    // You can add code to filter and display products within the selected price range here
  };

  render() {
    return (
      <div>
        <Slider
          range
          min={0}
          max={100}
          value={[this.state.minPrice, this.state.maxPrice]}
          onChange={this.handlePriceChange}
        />
        <div>
          Price Range: ${this.state.minPrice} - ${this.state.maxPrice}
        </div>
      </div>
    );
  }
}

export default PriceRangeSlider;
