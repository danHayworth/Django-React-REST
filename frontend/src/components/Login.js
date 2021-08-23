import  React, { Component } from 'react'

export default class Login extends Component {

    render() {
        return (
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label for="icon_prefix">Username</label>
                    </div>
                    <div class="input-field col s6">
                    <i class="material-icons prefix">key</i>
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label for="icon_telephone">Password</label>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
                </form>
            </div>
        )
    }
}