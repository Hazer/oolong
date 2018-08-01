package oolong

object Counter {

    lateinit var model: Model
    lateinit var dispatch: Dispatch<Msg>

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Model

    data class Model(
        val count: Int
    )

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Messages

    sealed class Msg {
        object Increment : Msg()
        object Decrement : Msg()
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Functions

    val init: () -> Update<Model, Msg> = {
        Update(Model(0))
    }

    val update: (Msg, Model) -> Update<Model, Msg> = { msg, model ->
        when (msg) {
            Msg.Increment -> Update(model.copy(count = model.count + 1))
            Msg.Decrement -> Update(model.copy(count = model.count - 1))
        }
    }

    val view: (Model, Dispatch<Msg>) -> Unit = { model, dispatch ->
        this.model = model
        this.dispatch = dispatch
    }

}