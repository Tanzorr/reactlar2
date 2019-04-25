import React, { Component } from 'react';
//import  axios from 'axios';

export default class Add extends Component {

    // constructor()
    // {
    //     super();
    //     this.onChangeCategoryName =this.onChangeCategoryName.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this)
    //     this.state = {
    //         category_name:''
    //     };
    // }
    //
    // onChangeCategoryName(e){
    //     this.setState({
    //         cat_name: e.target.value
    //     });
    // };
    //
    // onSubmit(e){
    //     e.preventDefault();
    //     const category = {
    //         cat_name: this.state.category_name
    //     };
    //
    //     axios.post('http://reactlar/category/store', category)
    //         .then(res=>console.log(res.data));}
    // };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="cat name">Category name:</label>
                        <input type="text" className="form-control"
                               id="cat_name"


                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }
}





