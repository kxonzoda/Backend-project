const postService = require('../server/post.service')

class PostController {
	async getAll(req, res) {
		try {
			console.log(req.requestTime);
			
			const allPosts = await postService.getAll()
			res.status(200).json(allPosts)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async create(req, res) {
		try {
			console.log()
			const post = await postService.create(req.body, req.files.picture)
			res.status(201).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async delete(req, res) {
		try {
			const post = await postService.delete(req.params.id)
			res.status(200).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}

async edit(post, id) {
		if (!id) {
			throw new Error('Id not found')
		}

		const updatedData = await postModel.findByIdAndUpdate(id, post, {
			new: true,
		})
		return updatedData
	}
	
	async getOne(req, res){
		try {
			const post = await postService.getOne(req.params.id)
			res.status(200).json(post)
		} catch (error) {
			res.status(500).json(error)
		}
	}
}

module.exports = new PostController();
