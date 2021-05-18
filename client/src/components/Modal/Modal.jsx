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
						<h2 className="modalTitle">Kappa</h2>
						<span
							className="modalClose"
							onClick={this.props.onClose}
						>
							&times;
						</span>
					</div>
					<div className="modalContent">
						<p className="modalDescription">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Dolorum magnam ipsa praesentium fugiat quasi
							neque impedit at, consectetur dolorem maxime iure
							quo non sed in reprehenderit assumenda recusandae,
							eos nihil?
						</p>
					</div>
				</div>
			</div>
		);
	}
}
