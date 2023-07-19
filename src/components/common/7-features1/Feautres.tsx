import React from 'react'

const styles = {
	features : 'container text-center my-20 ',
	subheading : 'text-3',
	heading : 'text-3xl font-bold ',
	contentBox : '',
}
const Feautres = () => {
	return (
		// 
		<div className={styles.features}>
			<h3 className={styles.subheading}>Our Features</h3>
			<h2 className={styles.heading}>Have a dream? Digitize it with us!</h2>
			<div className={styles.contentBox}></div>
		</div>
	)
}

export default Feautres