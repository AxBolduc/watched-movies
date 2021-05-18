import React, { Component } from "react";

export default class Modal extends Component {
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div className="modal">
				<div className="modalBox">
					<div className="modalHeader">
						<h2 className="modalTitle">
							
							{this.props.movie.original_title}
						
						</h2>
						<span
							className="modalClose"
							onClick={this.props.onClose}
						>
							&times;
						</span>
					</div>
					<div className="modalContent">
						<p className="modalDescription">
							{this.props.movie.overview}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
