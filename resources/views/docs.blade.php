<x-splade-modal>
    <h1>Create new user</h1>
 
    <x-splade-form confirm :action="route('docs-submit')">
        <input v-model="form.name" placeholder="Name" />
        <p v-text="form.errors.name"></p>
        <button type="submit">Create</button>
    </x-splade-form>
</x-splade-modal>