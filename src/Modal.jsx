import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return createPortal(
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					✖
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Modal;
